function TitleDivider(Title , ColorText){

    return(
        <>
        <div style={{ direction: "auto" }}
        className={`text-secondary pb-8 font-bold text-3xl max-lg:text-xl max-md:text-lg divider divider-${ColorDivider}`}>
        <p className={`text-${ColorText}`}>{Title}</p>
      </div>
        </>
    )
}