export const setErrors =(ItemName, BrandName, QualityAssurance, UnitPrice, UnitProfit)=>{
    let errors = {};
    errors.ItemName=ItemName?"":"Item name is required"
    errors.BrandName=BrandName?"":"Brand name is required"
    errors.QualityAssurance=QualityAssurance?"":"Quality Assurance is required"
    errors.UnitPrice=UnitPrice?"":"Unit Price is required"
    errors.UnitProfit=UnitProfit?"":"Unit Profit is required"
    return errors;


}