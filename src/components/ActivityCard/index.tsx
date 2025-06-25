import { CardCategory, CardContainer, CardDate, CardDescription, CardTitle } from './styles';
import React from 'react';
import styled from 'styled-components/native';
import { TouchableOpacity, Platform } from 'react-native';

// Definição do tipo para os dados da atividade
interface ActivityCardProps {
  data: {
    id: string;
    titulo?: string | null; // Pode ser null ou undefined
    categoria?: string | null; // Pode ser null ou undefined
    descricao?: string | null; // Pode ser null ou undefined
    data: any; // Firebase Timestamp ou string
    local?: string | null; // Pode ser null ou undefined
    userId: string;
  };
  onPress: (activityId: string) => void;
}

// Componente ActivityCard
const ActivityCard = ({ data, onPress }: ActivityCardProps) => {
  // Garante que data.data é um objeto de Timestamp ou null antes de chamar toDate()
  const formattedDate = data.data?.toDate ? data.data.toDate().toLocaleDateString('pt-BR') : 'Data não informada';

  return (
    <CardContainer onPress={() => onPress(data.id)}>
      {/* Garante que os valores são sempre strings, mesmo se forem null/undefined */}
      <CardTitle>{data.titulo ?? 'Título não informado'}</CardTitle>
      <CardCategory>Categoria: {data.categoria ?? 'Não informada'}</CardCategory>
      <CardDescription numberOfLines={2}>{data.descricao ?? 'Descrição não disponível'}</CardDescription>
      <CardDate>Criado em: {formattedDate}</CardDate>
    </CardContainer>
  );
};

export default ActivityCard;

