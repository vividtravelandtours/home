import { configure, observable, action, runInAction } from 'mobx';
import { createContext, SyntheticEvent } from 'react';
import { IBrandInfo } from '../models/BrandInfo';
import graphCMS from '../api/graphCMS';
import { IPost } from '../models/Post';
import { IPopular } from '../models/Popular';
import { ITestimonial } from '../models/Testimonial';
import { ISocial } from '../models/Social';

configure({ enforceActions: 'always' });

class MainStore {
    @observable HomeInfo: IBrandInfo | null = null;
    @observable Posts: IPost[] | null = null;
    @observable PopularTours: IPopular[] | null = null;
    @observable Testimonials: ITestimonial[] | null = null;
    @observable SocialNetworks: ISocial[] | null = null;
    @observable isLoading = false;
    @observable Submitting = false;
    @observable SubmitByForm = '';
    @observable Error = { has: false, message: '' };

    @action loadData = async () => {
        this.isLoading = true;

        try {
            const fetchedData = await graphCMS.GetALL();
            runInAction('Loading Data', () => {
                this.HomeInfo = fetchedData.brandSiteSystems[0];
                this.Posts = this.getSortedPosts(fetchedData.postUpdates);
                this.PopularTours = fetchedData.topDestinations;
                this.Testimonials = fetchedData.testimonials;
                this.SocialNetworks = fetchedData.socialSites;
            });
        } catch (error) {
            console.log(error);
            this.Error = { has: true, message: error }
        } finally {
            runInAction(() => this.isLoading = false);
        }
    }

    @action setSubmitByForm = (event: SyntheticEvent<HTMLButtonElement>) => this.SubmitByForm = event.currentTarget.name;
    @action formSubmitting = (status: boolean) => this.Submitting = status;

    getSortedPosts = (posts: IPost[]) => {
        const sorted = posts.slice().sort((a, b) => Date.parse(b.updatedAt) - Date.parse(a.updatedAt));
        return sorted;
    }

    getPopularTours = (tours: IPopular[]) => {
        tours.map(t => console.log(t));
        return tours;
    }
}

export default createContext(new MainStore());