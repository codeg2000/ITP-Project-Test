export const setErrors = (Stock_ID, Supplier_Email, Supplier_ContactNo)=>{
    let errors = {};
    errors.Stock_ID = Stock_ID?"":"ID is Required"
    errors.Supplier_Email = Supplier_Email?"":"Email is Required"
    errors.Supplier_ContactNo = Supplier_ContactNo?"":"Contact No is Required"
    return errors;
};