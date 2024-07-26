import { TiDelete } from "react-icons/ti";

interface GridItemProps {
    id: string;
    text: string;
    onDelete: (id: string) => void;
}

const GridItem: React.FC<GridItemProps> = ({ id, text, onDelete }) => {
    return (
        <div className="grid__item">
            <p className="grid__text">{text.toLocaleLowerCase()}</p>
            <button className="button button--delete" onClick={() => onDelete(id)}>
                <TiDelete />
            </button>
        </div>
    );
};

export default GridItem;
