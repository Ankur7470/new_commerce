const filterReducer = (state, action)=>{
    switch(action.type){
        case "LOAD_FILTER_PRODUCTS":
            return{
                ...state,
                filter_products: [...action.payload],
                all_products: [...action.payload],
            };
            
        case "SET_LIST_VIEW":
            return{
                ...state,
                list_view: true,
            };

        case "SET_GRID_VIEW":
            return{
                ...state,
                list_view: false,
            };
        case "GET_SORT_VALUE":
            let userSortValue = document.getElementById("sort");
            let sort_value = userSortValue.options[userSortValue.selectedIndex].value;
            return{
                ...state,
                sorting_value: sort_value,
            };



        default: 
            return state;
    }
}
export default filterReducer;