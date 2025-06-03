import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solidStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";

export default function Estrelas({ media, total }) {
    const estrelas = [];

    for (let i = 1; i <= 5; i++) {
        if (i <= Math.floor(media)) {
            // Estrela cheia
            estrelas.push(
                <FontAwesomeIcon key={i} icon={solidStar} className="text-yellow-400 w-4 h-4" />
            );
        } else if (i - media <= 0.5) {
            // Meia estrela
            estrelas.push(
                <FontAwesomeIcon key={i} icon={faStarHalfStroke} className="text-yellow-400 w-4 h-4" />
            );
        } else {
            // Estrela vazia
            estrelas.push(
                <FontAwesomeIcon key={i} icon={regularStar} className="text-yellow-400 w-4 h-4" />
            );
        }
    }

    return (
        <div className="flex items-center">
            {estrelas}
            <span className="text-gray-600 ml-1 text-sm">({total})</span>
        </div>
    );
}
