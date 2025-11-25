// Mocks.tsx
import CardSwap, { Card } from '@/components/ui/CardSwap';
import monstrousmaker from '@/assets/img/proyects/monstrousmakeover.jpg';
import toprecomendado from '@/assets/img/proyects/toprecomendado.png';
import dashboard from '@/assets/img/proyects/dashboard.png';

export default function Mocks () {
  return (
    <div className="h-[430px] md:h-[520px] sm:h-[350px] lg:h-[600px] relative w-full">
      <CardSwap
        cardDistance={ 60 }
        verticalDistance={ 70 }
        delay={ 5000 }
        pauseOnHover={ false }
      >
        <Card className="bg-black rounded-md shadow p-4">
          <div className="flex justify-between items-center mb-2">
            <div className="flex items-center mb-2 gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500 flex items-center justify-center text-black text-[8px] font-bold">×</span>
              <span className="w-3 h-3 rounded-full bg-yellow-400 flex items-center justify-center text-black text-[10px] font-bold">–</span>
              <span className="w-3 h-3 rounded-full bg-green-500 flex items-center justify-center text-black text-[9px] font-bold">⤢</span>
            </div>
            <h1 className="text-white text-lg font-bold text-center w-full absolute left-0 right-0 mx-auto pointer-events-none">Monstrous Makeover</h1>
          </div>
          <a href='https://monstrousmakeover.vercel.app/' target="_blank" rel="noopener noreferrer">
            <img src={ monstrousmaker.src } alt="Placeholder" className="w-full h-[350px] object-cover rounded-md" />
          </a>
        </Card>

        <Card className="bg-black rounded-md shadow p-4">
          <div className="flex justify-between items-center mb-2">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500 flex items-center justify-center text-black text-[8px] font-bold">×</span>
              <span className="w-3 h-3 rounded-full bg-yellow-400 flex items-center justify-center text-black text-[10px] font-bold">–</span>
              <span className="w-3 h-3 rounded-full bg-green-500 flex items-center justify-center text-black text-[9px] font-bold">⤢</span>
            </div>
            <h1 className="text-white text-lg font-bold text-center w-full absolute left-0 right-0 mx-auto pointer-events-none">Top Recomendado</h1>
          </div>
          <img src={ toprecomendado.src } alt="Placeholder" className="w-full h-[350px] object-cover rounded-md" />
        </Card>

        <Card className="bg-black rounded-md shadow p-4">
          <div className="flex justify-between items-center mb-2">
            <div className="flex items-center mb-2 gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500 flex items-center justify-center text-black text-[8px] font-bold">×</span>
              <span className="w-3 h-3 rounded-full bg-yellow-400 flex items-center justify-center text-black text-[10px] font-bold">–</span>
              <span className="w-3 h-3 rounded-full bg-green-500 flex items-center justify-center text-black text-[9px] font-bold">⤢</span>
            </div>
            <h1 className="text-white text-lg font-bold text-center w-full absolute left-0 right-0 mx-auto pointer-events-none">Dashboard</h1>
          </div>
          <img src={ dashboard.src } alt="Placeholder" className="w-full h-[350px] object-cover rounded-md" />
        </Card>
      </CardSwap>
    </div>
  );
}