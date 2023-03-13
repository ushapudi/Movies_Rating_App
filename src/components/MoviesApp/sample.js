function moviesList(movies){

    const result = movies.map((ele) => {

        return ele.ranking

    })
    let max = 0

    for(let i = 0; i < result.length; i++){

        if(result[i] > max){

            max = result[i]

        }

    }
    return max

}
const movies = [{title : 'Bahubali', ranking : 9.9}, {title : 'Saaho', ranking : 7.5}, {title : 'Aranya', ranking : 6}]

console.log(moviesList(movies))