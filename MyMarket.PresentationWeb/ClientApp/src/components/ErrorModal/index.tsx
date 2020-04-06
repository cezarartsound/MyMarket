import { ApplicationState, AppThunkDispatch } from "../../store";
import { connect } from "react-redux";
import { ErrorModal, ErrorModalStateProps, ErrorModalActionProps } from "./ErrorModal";
import { clearGenericError } from "../../store/navigation/actions";

const mapStateToProps = (state: ApplicationState): ErrorModalStateProps => ({
    showError: state.navigation.showError,
    error: state.navigation.error,
})

const mapDispatchToProps = (dispatch: AppThunkDispatch): ErrorModalActionProps => ({
    clearError: () => dispatch(clearGenericError()),
})

export default connect<ErrorModalStateProps, ErrorModalActionProps, void, ApplicationState>(
    mapStateToProps,
    mapDispatchToProps,
)(ErrorModal as any);