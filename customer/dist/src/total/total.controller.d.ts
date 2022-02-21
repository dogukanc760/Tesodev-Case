import { TotalService } from './total.service';
export declare class TotalController {
    private totalService;
    constructor(totalService: TotalService);
    getAllTotal(): Promise<any>;
}
