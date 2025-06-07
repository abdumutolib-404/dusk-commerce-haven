
import { Button } from '@/components/ui/button';
import { useTheme } from '@/contexts/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="transition-transform duration-200 hover:scale-105"
    >
      {theme === 'dark' ? (
        <div className="h-5 w-5 rounded-full bg-yellow-400 relative">
          <div className="absolute inset-0.5 rounded-full bg-yellow-300"></div>
        </div>
      ) : (
        <div className="h-5 w-5 rounded-full border-2 border-current relative">
          <div className="absolute top-0.5 left-0.5 w-2 h-2 rounded-full bg-current"></div>
        </div>
      )}
    </Button>
  );
};

export default ThemeToggle;
