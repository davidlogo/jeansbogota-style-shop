import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Filter, SortAsc, SortDesc } from 'lucide-react';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet';
import { Badge } from './ui/badge';

export type SortOption = 'price-asc' | 'price-desc' | 'newest' | 'oldest';

interface SortFilterProps {
  sortBy: SortOption;
  onSortChange: (sort: SortOption) => void;
  productCount: number;
  onFilterClick?: () => void;
  showFilterButton?: boolean;
}

export const SortFilter = ({ 
  sortBy, 
  onSortChange, 
  productCount, 
  onFilterClick,
  showFilterButton = false 
}: SortFilterProps) => {
  const sortOptions = [
    { value: 'price-asc', label: 'Precio: Menor a Mayor', icon: SortAsc },
    { value: 'price-desc', label: 'Precio: Mayor a Menor', icon: SortDesc },
    { value: 'newest', label: 'Más Nuevos', icon: SortDesc },
    { value: 'oldest', label: 'Más Antiguos', icon: SortAsc },
  ];

  const selectedOption = sortOptions.find(option => option.value === sortBy);

  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 p-4 bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-gray-700">Ordenar por:</span>
          <Select value={sortBy} onValueChange={onSortChange}>
            <SelectTrigger className="w-full sm:w-48 h-9">
              <SelectValue>
                <div className="flex items-center gap-2">
                  {selectedOption && (
                    <>
                      <selectedOption.icon className="h-4 w-4" />
                      <span className="text-sm hidden sm:inline">{selectedOption.label}</span>
                      <span className="text-sm sm:hidden">{selectedOption.label.split(':')[0]}</span>
                    </>
                  )}
                </div>
              </SelectValue>
            </SelectTrigger>
            <SelectContent>
              {sortOptions.map((option) => {
                const Icon = option.icon;
                return (
                  <SelectItem key={option.value} value={option.value}>
                    <div className="flex items-center gap-2">
                      <Icon className="h-4 w-4" />
                      <span>{option.label}</span>
                    </div>
                  </SelectItem>
                );
              })}
            </SelectContent>
          </Select>
        </div>
        
        <Badge variant="secondary" className="bg-blue-50 text-blue-700 border-blue-200 w-fit">
          {productCount} productos
        </Badge>
      </div>

      {showFilterButton && (
        <Button
          variant="outline"
          size="sm"
          onClick={onFilterClick}
          className="flex items-center gap-2 w-full sm:w-auto"
        >
          <Filter className="h-4 w-4" />
          Filtros
        </Button>
      )}
    </div>
  );
};
