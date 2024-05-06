import PropTypes from 'prop-types'
export default function TitleDivider(TitleDivider , ColorDivider2){

    return(
        <>
        <div style={{ direction: "auto" }}
        className={`text-secondary pb-8 font-bold text-3xl max-lg:text-xl max-md:text-lg divider divider-${ColorDivider2}`}>
        <p className={`text-${ColorDivider2}`}>{TitleDivider}</p>
      </div>
        </>
    )
}
TitleDivider.defaultProps = {
    ColorText: 'primary',
    ColorDivider2: 'secondary'
}
TitleDivider.prototypes = {
    ColorText: PropTypes.string.isRequired,
    ColorDivider2: PropTypes.string.isRequired
}