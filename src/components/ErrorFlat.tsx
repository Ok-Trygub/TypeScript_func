import React from 'react';

const ErrorFlat = () => {
    const arr = [2,8, 3, [12, 17], 23, 34];

    type NestedArrayElement = number | NestedArrayElement[];
    type NestedArray = NestedArrayElement[];


    function flat(array: NestedArray): number[] | never {

        if (arguments.length > 1) {
            throw new Error('Function accepts only 1 argument, too much arguments provided');

        } else {
            let newArr: number[] = [];


            for (let i = 0; i < array.length; i++) {

                if (Array.isArray(array[i])) {

                    console.log(array[i])

                    newArr = newArr.concat(flat(array[i]));

                    console.log(newArr)


                } else {
                    newArr.push(array[i]);
                }
            }

            // console.log(newArr)
            return newArr;
        }
    }



    console.log(flat(arr));





    return (
        <div>

        </div>
    );
};

export default ErrorFlat;
