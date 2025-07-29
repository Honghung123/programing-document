import { getAllVocabularies } from "@/apis/vocabulary.api";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LoadingCircle } from "@/components/ui/loading-circle";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import VocabularyList from "@/pages/LearnEnglishPage/list-vocabularies";
import { VocabularyType } from "@/types/vocabulary.type";
import { Filter, Plus, Search } from "lucide-react";
import { useEffect, useState } from "react";
import { useDebouncedCallback } from "use-debounce";

export default function LearnEnglishPage() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [vocabularies, setVocabularies] = useState<VocabularyType[] | null>(null);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(4);
  const [hasMore, setHasMore] = useState(true);

  // Fetch vocabularies
  const fetchVocabularies = async () => {
    const vocabularies = await getAllVocabularies(page, limit, searchTerm);
    console.log("Has more, " + vocabularies);
    if (vocabularies.length < limit) {
      setHasMore(false);
    }
    setPage((prevPage) => prevPage + 1);
    setVocabularies((prevVocabularies) => [...(prevVocabularies || []), ...vocabularies]);
  };
  useEffect(() => {
    fetchVocabularies();
  }, []);

  const searchDebounced = useDebouncedCallback((value) => {
    setSearchTerm(value);
    if (page != 1) {
      setPage((page) => 1);
    }
    fetchVocabularies();
  }, 500);

  if (!vocabularies) return <LoadingCircle />;

  return (
    <>
      <div className="container m-auto px-6 py-2 scroll-smooth">
        <div className="p-2 mx-4 md:mx-12">
          <Navbar />
        </div>
        <main>
          <div className="mx-auto max-w-6xl">
            {/* Header */}
            <div className="mb-8 flex items-center justify-between">
              <div className="flex gap-2 items-stretch">
                <Button
                  variant="outline"
                  size="sm"
                  className="gap-2 bg-transparent"
                >
                  <Filter className="h-4 w-4" />
                  Filter
                </Button>
                <Select
                  value={limit.toString()}
                  onValueChange={(value) => setLimit((lm) => Number(value))}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="10">10</SelectItem>
                    <SelectItem value="20">20</SelectItem>
                    <SelectItem value="30">30</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <h1 className="text-3xl font-bold text-slate-800">My Vocabulary</h1>

              <Button
                size="sm"
                className="gap-2"
              >
                <Plus className="h-4 w-4" />
                Add New
              </Button>
            </div>

            {/* Search Bar */}
            <div className="mb-8 flex justify-center">
              <div className="relative w-full max-w-md">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <Input
                  placeholder="Search vocabularies..."
                  value={searchTerm}
                  onChange={(e) => searchDebounced(e.target.value)}
                  className="pl-10 h-12 text-lg shadow-sm"
                />
              </div>
            </div>

            {/* Vocabulary List */}
            <VocabularyList
              listVocabularies={vocabularies!}
              hasMore={hasMore}
              fetchVocabularies={fetchVocabularies}
            />

            {vocabularies!.length === 0 && (
              <div className="text-center py-12">
                <p className="text-slate-500 text-lg">No vocabularies found matching your search.</p>
              </div>
            )}
          </div>
        </main>
      </div>
    </>
  );
}
