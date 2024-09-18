'use client';

import { Input } from '../ui/input';
import { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';

import { useDebouncedCallback } from 'use-debounce';

function NavSearch() {
  const searchParams = useSearchParams();
  // console.log(searchParams);

  const { replace } = useRouter();
  const [search, setSearch] = useState(
    searchParams.get('search')?.toString() || ''
  );

  const handleSearch = useDebouncedCallback((value: string) => {
    const params = new URLSearchParams(searchParams);
    // console.log(params);

    if (value) {
      params.set('search', value);
    } else {
      params.delete('search');
    }
    replace(`/products?${params.toString()}`);
  }, 300);

  useEffect(() => {
    if (!searchParams.get('search')) {
      setSearch('');
    }
  }, [searchParams.get('search')]);
  return (
    <Input
      type="search"
      placeholder="search products..."
      className="max-w-xs dark:bg-muted"
      value={search}
      onChange={(e) => {
        handleSearch(e.target.value);
        setSearch(e.target.value);
      }}
    />
  );
}

export default NavSearch;
