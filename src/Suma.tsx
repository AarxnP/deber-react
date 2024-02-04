const calculateArraySum = (array: number[]): number => {
    const sum = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return sum;
};

const ArraySumComponent: React.FC = () => {
    const array = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
    const sum = calculateArraySum(array);

    return (
        <div>
            <h2>Sumar:</h2>
            <p>{array.join(', ')}</p>
            <h2>Suma:</h2>
            <p>{sum}</p>
        </div>
    );
};

export default ArraySumComponent;