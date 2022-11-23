import { DOTS, usePagination } from '../../hooks/usePagination';
import { Arrow, PaginationContainer, PaginationItem } from './styles';

interface PaginationComponentProps {
  onPageChange: (currentPage: number) => void
  totalItems: number
  siblingsPageNumberCount?: number
  currentPage: number
  itemsPerPage: number
}

export function Pagination({ onPageChange,
  totalItems,
  siblingsPageNumberCount = 1,
  currentPage,
  itemsPerPage} : PaginationComponentProps){

  const paginationRange = usePagination({
    totalItems,
    itemsPerPage,
    siblingsPageNumberCount,
    currentPage
  });
  let lastPage = paginationRange[paginationRange.length - 1];

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  // Se houver menos que 2 vezes no intervalo de paginação, não renderizamos o componente
  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  return (
    <PaginationContainer className='pagination-container'>
      <PaginationItem disabled={currentPage === 1} onClick={onPrevious}>
        <Arrow className="left" />
      </PaginationItem>

      {paginationRange.map(pageNumber => {
        if (pageNumber === DOTS) { 
          return <PaginationItem className="dots" key="dots">&#8230;</PaginationItem>;
        }
		
        // Renderize a amostra de página
        return (
          <PaginationItem 
            key={pageNumber}
            selected={pageNumber === currentPage} 
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </PaginationItem>
        );
      })}

      <PaginationItem disabled={currentPage === lastPage} onClick={onNext}>
        <Arrow className="right" />
      </PaginationItem>
    </PaginationContainer>
  );
};
