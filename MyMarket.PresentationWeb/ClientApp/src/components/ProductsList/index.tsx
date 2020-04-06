import { ProductsList, ProductsListStateProps, ProductsListActionProps } from "./ProductsList";
import { ApplicationState, AppThunkDispatch } from "../../store";
import { connect } from "react-redux";
import * as HomePageStore from "../../store/homePage";

const mapStateToProps = (state: ApplicationState): ProductsListStateProps => ({
    products: HomePageStore.Selectors.getProductsOverview(state),
    allProductsLoaded: HomePageStore.Selectors.areAllProductsLoaded(state),
})

const mapDispatchToProps = (dispatch: AppThunkDispatch): ProductsListActionProps => ({
    loadProducts: offset => offset === 0 
        ? dispatch(HomePageStore.Actions.loadHomePageData())
        : dispatch(HomePageStore.Actions.loadProducts(offset)),
})

export default connect<ProductsListStateProps, ProductsListActionProps, void, ApplicationState>(
    mapStateToProps,
    mapDispatchToProps,
)(ProductsList as any);