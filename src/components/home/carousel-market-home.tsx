import { Card, CardContent } from "@/components/ui/card";
import { churrascariasCampoGrande } from "@/data/steakhouse";
import { Link } from "react-router-dom";

const TopDiscount = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-semibold">Top Churrascarias</h3>
        <Link to="/library">
          <button className="text-gray-500 text-sm">Ver todos</button>
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {churrascariasCampoGrande.map((churrascaria, index) => (
          <Link key={index} to={`/churrascaria/${churrascaria.id}`}>
            <Card>
              <CardContent className="p-2">
                <div className="w-full h-24 bg-gray-200 rounded-lg mb-2">
                  <img
                    src={churrascaria.img}
                    alt={churrascaria.nome}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <h4 className="font-semibold text-sm">{churrascaria.nome}</h4>
                <div className="flex justify-between items-center text-xs text-gray-500">
                  <span>★ {churrascaria.rating} reviews</span>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TopDiscount;