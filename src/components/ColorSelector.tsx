interface ColorSelectorProps {
  selectedColor: string;
  onColorChange: (color: string) => void;
  availableColors: string[];
}

const getColorValue = (colorName: string): string => {
  const colorMap: { [key: string]: string } = {
    'Azul': '#1e40af',
    'Negro': '#000000',
    'Azul Claro': '#3b82f6',
    'Índigo': '#4338ca',
  };
  
  return colorMap[colorName] || '#6b7280';
};

export const ColorSelector = ({ selectedColor, onColorChange, availableColors }: ColorSelectorProps) => {
  return (
    <div className="flex gap-3">
      {availableColors.map((color) => {
        const colorValue = getColorValue(color);
        const isSelected = selectedColor === color;
        
        return (
          <button
            key={color}
            onClick={() => onColorChange(color)}
            className={`w-8 h-8 rounded-full border-2 transition-all duration-200 hover:scale-110 ${
              isSelected 
                ? 'border-gray-800 shadow-lg ring-2 ring-gray-300' 
                : 'border-gray-300 hover:border-gray-500'
            }`}
            style={{ backgroundColor: colorValue }}
            title={color}
            aria-label={`Seleccionar color ${color}`}
          />
        );
      })}
    </div>
  );
};
