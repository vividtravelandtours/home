import { request } from 'graphql-request';
import { brandInfoQuery } from './Query/BrandInfoQuery';
import { IModels } from '../models/Models';
import { postQuery } from './Query/PostQuery';
import { popularQuery } from './Query/PopularQuery';
import { testimonialQuery } from './Query/TestimonialQuery';

const endpoint = 'https://api-apeast.graphcms.com/v1/ck4wi2nmccz8b01bqcjht3b8x/master';

const query = `
query {
    ${brandInfoQuery},
    ${postQuery},
    ${popularQuery},
    ${testimonialQuery}
}`;

const graphCMS = {
    GetALL: async () => await request<IModels>(endpoint, query)
}

export default graphCMS;