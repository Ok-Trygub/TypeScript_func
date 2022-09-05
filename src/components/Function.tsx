import React from 'react';


const Function = () => {

    const myArr = [1, 2, 3, -1, -2, -3];

    function sortArr(arr: Array<number>): Array<number> | null {

        if (!arr.length) throw new Error('Argument array is empty!')
        const exampleArr: Array<number> = [];


        for (let i: number = 0; i < arr.length; i++) {
            if (arr[i] > 0) exampleArr.push(arr[i])
        }

        if (exampleArr.length) return exampleArr;
        return null;
    }


    const result: Array<number> | null = sortArr(myArr);

    return (
        <div>
            {result ? result.map((arrItem: any, index) => (
                        <p key={index}> {arrItem} </p>
                    )
                )
                :
                null
            }
        </div>
    );
};

export default Function;
