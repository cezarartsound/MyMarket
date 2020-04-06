import { ApplicationState } from "../../store";
import { connect } from "react-redux";
import { Highlights, HighlightsProps } from "./Highlights";
import { getHighlights } from "../../store/homePage/selectors";

const mapStateToProps = (state: ApplicationState): HighlightsProps => ({
    items: getHighlights(state).map(p => ({
        imageUrl: p.imageUrl,
        caption: p.caption,
        altText: p.description,
        href: p.redirectUrl,
    })),
    texts: {}, // TODO
})

export default connect<HighlightsProps, void, void, ApplicationState>(
    mapStateToProps,
    () => ({}),
)(Highlights as any);