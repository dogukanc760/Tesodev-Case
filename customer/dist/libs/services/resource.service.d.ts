import { Model, Document } from "mongoose";
import { FilterModel } from "tools/models/filter.model";
export declare class ResourceService<T extends Document, C extends any, U extends any> {
    private readonly mongoModel;
    constructor(mongoModel: Model<T>);
    generalSearchQuery: {
        page: number;
        size: number;
        sort: string;
        sortBy: string;
        queryText: string;
        searchBy: string;
    };
    create(model: C): Promise<T>;
    findAll(query?: FilterModel): Promise<any>;
    findOne(id: string): Promise<T[]>;
    delete(id: string): Promise<T>;
    update(id: string, dto: U): Promise<T>;
}
