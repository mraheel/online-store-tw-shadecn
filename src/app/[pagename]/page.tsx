const Pages = ({ params, searchParams }: {
    params: { pagename: string },
    searchParams: { id: string },
  }) => {


    return (
        <>
            <p>Post: {params.pagename}</p>
        </>
    )
}

export default Pages;