import React from 'react';
import { ThumbsUp, MessageCircle, Share2 } from 'lucide-react';

const COMMENTS = [
  {
    id: 1,
    name: "Ana Cláudia Silva",
    image: "https://picsum.photos/id/64/50/50",
    time: "Há 2 horas",
    text: "Meu Deus, a Aula 02 mudou minha visão sobre minhas dores nas costas! Eu nunca imaginei que tinha relação com o suporte familiar. Gratidão Priscilla!",
    likes: 45
  },
  {
    id: 2,
    name: "Roberto Campos",
    image: "https://picsum.photos/id/91/50/50",
    time: "Há 5 horas",
    text: "Conteúdo denso e transformador. Já sou terapeuta há 10 anos e nunca vi essa abordagem tão clara. Aguardando ansiosamente a abertura das vagas.",
    likes: 28
  },
  {
    id: 3,
    name: "Juliana Mendez",
    image: "https://picsum.photos/id/65/50/50",
    time: "Há 1 dia",
    text: "Gente, alguém mais chorou assistindo a análise ao vivo? Foi como se ela estivesse lendo a minha alma. Incrível.",
    likes: 112
  }
];

const CommentsSection: React.FC = () => {
  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <span className="text-brand-main">
              <MessageCircle />
            </span>
            Comentários da Comunidade
          </h3>

          <div className="space-y-6">
            {COMMENTS.map((comment) => (
              <div key={comment.id} className="flex gap-3 sm:gap-4">
                <img 
                  src={comment.image} 
                  alt={comment.name} 
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-white shadow-sm"
                />
                <div className="flex-1">
                  <div className="bg-gray-100 p-3 sm:p-4 rounded-2xl rounded-tl-none">
                    <div className="flex justify-between items-baseline mb-1">
                      <span className="font-bold text-gray-900 text-sm sm:text-base">{comment.name}</span>
                      <span className="text-xs text-gray-400">{comment.time}</span>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">{comment.text}</p>
                  </div>
                  <div className="flex items-center gap-4 mt-1 ml-2 text-xs font-semibold text-gray-500">
                    <button className="hover:text-brand-main hover:underline flex items-center gap-1">
                      Curtir • {comment.likes}
                    </button>
                    <button className="hover:text-brand-main hover:underline">Responder</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-gray-100 text-center">
            <button className="text-brand-main font-semibold text-sm hover:underline">Ver mais 128 comentários</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentsSection;