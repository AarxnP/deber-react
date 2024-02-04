const arreglo = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

const dividedArray = arreglo.map(element => element / 5);

const ArrayDivisionComponent: React.FC = () => {
    return (
        <div>
            <h2>La Division Es:</h2>
            <p>{dividedArray.join(', ')}</p>
        </div>
    );
};

export default ArrayDivisionComponent;