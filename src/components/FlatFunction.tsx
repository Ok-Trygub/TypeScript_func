import React from 'react';

const FlatFunction = () => {

    const arr = [9, [[5, 2], 4, [3, 1, [7, 8]]]];


    function flat(array: any[]): number[] | never {

        if (arguments.length > 1) {
            throw new Error('Function accepts only 1 argument, too much arguments provided');

        } else {
            let newArr: number[] = [];

            for (let i = 0; i < array.length; i++) {

                if (Array.isArray(array[i])) {
                    newArr = newArr.concat(flat(array[i]));
                } else {
                    newArr.push(array[i]);
                }
            }
            return newArr;
        }
    }


    console.log(flat(arr));


    return (
        <div>

        </div>
    );
};

export default FlatFunction;
