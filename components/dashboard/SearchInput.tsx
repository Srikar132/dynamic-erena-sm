import { redirect } from 'next/navigation';
import { Clock, LucideArrowDownWideNarrow, Search, X } from 'lucide-react';
import { Input } from '../ui/input';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { statusColors } from '@/lib/utils';

// Consolidated server action for all filtering operations
async function handleFilter(formData: FormData) {
  "use server";

  const currentParams = new URLSearchParams(formData.get("currentParams") as string);
  
  // Handle tournament search
  const tournament = formData.get("tournament") as string;
  if (tournament) {
    currentParams.set("type", tournament);
  }
  
  // Handle status filter
  const status = formData.get("status") as string;
  if (status) {
    currentParams.set("status", status);
  }
  
  // Handle category filter
  const category = formData.get("category") as string;
  if (category) {
    currentParams.set("category", category);
  }
  
  redirect(`/dashboard/tournament/?${currentParams.toString()}`);
}

// Clear filters action
async function clearFilters(formData: FormData) {
  "use server";
  
  const currentParams = new URLSearchParams(formData.get("currentParams") as string);
  
  // Get the parameters to clear
  const paramsToClear = formData.get("clear") as string;
  
  if (paramsToClear === "all") {
    // Clear all filters
    currentParams.delete("type");
    currentParams.delete("status");
    currentParams.delete("category");
  } else if (paramsToClear) {
    // Clear specific filter
    currentParams.delete(paramsToClear);
  }
  
  redirect(`/dashboard/tournament/?${currentParams.toString()}`);
}

export default function SearchInput({ placeholder, currentParams }: { placeholder: string, currentParams: string }) {
  // Define categories array for consistency
  const categories = ["free fire", "bgmi", "chess"];
  
  // Parse currentParams to determine which filters are active
  const parsedParams = new URLSearchParams(currentParams);
  const hasActiveFilters = parsedParams.has("type") || parsedParams.has("status") || parsedParams.has("category");
  

  const activeType = parsedParams.get("type");
  const activeStatus = parsedParams.get("status");
  const activeCategory = parsedParams.get("category");
  
  return (
    <div className='flex flex-col sm:flex-row w-full gap-y-2 sm:gap-y-0 items-start sm:items-center gap-x-3 justify-between'>
      <div className="flex flex-wrap items-center gap-2">
        {/* Search input */}
        <form action={handleFilter} className='relative'>
          <div className='absolute left-2 top-1/2 flex items-center justify-center -translate-y-1/2'>
            <Search className='text-primary_green size-5' />
          </div>
          <Input
            name='tournament'
            placeholder={placeholder}
            className='border-b-primary_accent min-w-52 pl-8 rounded-none'
            type='search'
            defaultValue={activeType || ""}
          />
          <input type="hidden" name="currentParams" value={currentParams} />
          <button type="submit" className="hidden">Search</button>
        </form>

        {/* Status dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger className={`px-4 py-2 flex items-center gap-x-2 text-md uppercase leading-3 rounded-md cursor-pointer ${activeStatus ? "bg-primary_green/20" : ""}`}>
            <Clock className='size-3'/> Status {activeStatus && `(${activeStatus})`}
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Tournament Status</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {Object.keys(statusColors).map((status) => (
              <form action={handleFilter} key={status}>
                <input type="hidden" name="currentParams" value={currentParams} />
                <button type="submit" name="status" value={status} className="w-full text-left">
                  <DropdownMenuItem className={activeStatus === status ? "bg-primary_green/20" : ""}>
                    {status}
                  </DropdownMenuItem>
                </button>
              </form>
            ))}
            {activeStatus && (
              <>
                <DropdownMenuSeparator />
                <form action={clearFilters}>
                  <input type="hidden" name="currentParams" value={currentParams} />
                  <input type="hidden" name="clear" value="status" />
                  <button type="submit" className="w-full text-left">
                    <DropdownMenuItem className="text-red-500">
                      <X className="size-4 mr-2" /> Clear Status Filter
                    </DropdownMenuItem>
                  </button>
                </form>
              </>
            )}
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Category dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger className={`px-4 py-2 flex items-center gap-x-2 text-md uppercase leading-3 rounded-md cursor-pointer ${activeCategory ? "bg-primary_green/20" : ""}`}>
            Category {activeCategory && `(${activeCategory})`} <LucideArrowDownWideNarrow className="size-4"/> 
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Tournament Category</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {categories.map((category) => (
              <form action={handleFilter} key={category}>
                <input type="hidden" name="currentParams" value={currentParams} />
                <button type="submit" name="category" value={category} className="w-full text-left">
                  <DropdownMenuItem className={`capitalize ${activeCategory === category ? "bg-primary_green/20" : ""}`}>
                    {category}
                  </DropdownMenuItem>
                </button>
              </form>
            ))}
            {activeCategory && (
              <>
                <DropdownMenuSeparator />
                <form action={clearFilters}>
                  <input type="hidden" name="currentParams" value={currentParams} />
                  <input type="hidden" name="clear" value="category" />
                  <button type="submit" className="w-full text-left">
                    <DropdownMenuItem className="text-red-500">
                      <X className="size-4 mr-2" /> Clear Category Filter
                    </DropdownMenuItem>
                  </button>
                </form>
              </>
            )}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Clear all filters button */}
      {hasActiveFilters && (
        <form action={clearFilters}>
          <input type="hidden" name="currentParams" value={currentParams} />
          <input type="hidden" name="clear" value="all" />
          <Button 
            type="submit" 
            variant="outline" 
            className="text-red-500 border-red-500 hover:bg-red-500/10"
          >
            <X className="size-4 mr-2" /> Clear All Filters
          </Button>
        </form>
      )}
    </div>
  );
}