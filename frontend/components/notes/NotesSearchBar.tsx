"use client"

import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Search } from "lucide-react"

export function NotesSearchBar() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  // Función genérica para actualizar los parámetros de la URL
  const updateQueryParams = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams);
    
    // Reseteamos a la página 1 siempre que se cambie un filtro
    params.set('page', '1'); 

    if (value && value !== 'all') {
      params.set(key, value);
    } else {
      params.delete(key);
    }

    // Navegación silenciosa (actualiza el Server Component)
    replace(`${pathname}?${params.toString()}`);
  };

  // Debounce para la búsqueda de texto (300ms) para no saturar Express
  const handleSearch = useDebouncedCallback((term: string) => {
    updateQueryParams('search', term);
  }, 300);

  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-6">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <Input
          placeholder="Buscar notas por título o contenido..."
          defaultValue={searchParams.get('search')?.toString()}
          onChange={(e) => handleSearch(e.target.value)}
          className="pl-10"
        />
      </div>

      <div className="flex gap-3">
        <Select 
          defaultValue={searchParams.get('status')?.toString() || "all"} 
          onValueChange={(value) => updateQueryParams('status', value)}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filtrar por estado" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todos los estados</SelectItem>
            {/* Estos valores deben coincidir exactamente con tu enum en Express/Prisma */}
            <SelectItem value="Pending">Pendiente</SelectItem>
            <SelectItem value="InProgress">En progreso</SelectItem>
            <SelectItem value="Completed">Completado</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}