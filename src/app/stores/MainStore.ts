import { configure, observable, action, runInAction } from 'mobx';
import { createContext } from 'react';
import { IBrandInfo } from '../models/BrandInfo';
import graphCMS from '../api/graphCMS';
import { IPost } from '../models/Post';

configure({ enforceActions: 'always' });

class MainStore {
    @observable HomeInfo: IBrandInfo | null = null;
    @observable Posts: IPost[] | null = null;
    @observable isLoading = false;
    @observable Error = { has: false, message: '' };

    @action loadData = async () => {
        this.isLoading = true;

        try {
            const fetchedData = await graphCMS.GetALL();
            runInAction('Loading Data', () => {
                this.HomeInfo = fetchedData.brandSiteSystems[0];
                this.Posts = this.getSortedPosts(fetchedData.postUpdates);
            });
        } catch (error) {
            console.log(error);
            this.Error = { has: true, message: error }
        } finally {
            runInAction(() => this.isLoading = false);
        }
    }

    getSortedPosts = (posts: IPost[]) => {
        const sorted = posts.slice().sort((a, b) => Date.parse(b.updatedAt) - Date.parse(a.updatedAt));
        return sorted;
    }
}

export default createContext(new MainStore());