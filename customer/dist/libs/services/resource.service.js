"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResourceService = void 0;
const filter_model_1 = require("../../tools/models/filter.model");
class ResourceService {
    constructor(mongoModel) {
        this.mongoModel = mongoModel;
        this.generalSearchQuery = {
            page: 1,
            size: 10,
            sort: 'ASC',
            sortBy: '_id',
            queryText: '',
            searchBy: 'name',
        };
    }
    async create(model) {
        const createdModel = new this.mongoModel(model);
        return await createdModel.save();
    }
    async findAll(query) {
        if (Object.keys(query).length !== 0) {
            const searchValue = await Object.assign(Object.assign({}, this.generalSearchQuery), query);
            const userRegex = new RegExp(searchValue.queryText, 'i');
            return await this.mongoModel
                .find({
                [searchValue.searchBy]: userRegex,
            })
                .limit(Math.max(0, searchValue.size))
                .skip(searchValue.size * (searchValue.page - 1))
                .sort([[]]);
        }
        else {
            const count = await this.mongoModel.countDocuments({}).exec();
            const data = await this.mongoModel.find()
                .limit(Math.max(0, this.generalSearchQuery.size))
                .skip(this.generalSearchQuery.size * (this.generalSearchQuery.page - 1)).exec();
            return await [
                {
                    success: true,
                    size: this.generalSearchQuery.size,
                    total: count,
                    data
                }
            ];
        }
    }
    async findOne(id) {
        return await this.mongoModel.find({ _id: id }).exec();
    }
    async delete(id) {
        return await this.mongoModel.findByIdAndDelete({ _id: id }).exec();
    }
    async update(id, dto) {
        return await this.mongoModel.findByIdAndUpdate(id, dto, { new: true }).exec();
    }
}
exports.ResourceService = ResourceService;
//# sourceMappingURL=resource.service.js.map