import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { formatDate } from "date-fns";
import { Edit, Heart, Trash2, Volume2 } from "lucide-react";
import { VocabularyType } from "@/types/vocabulary.type";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { LoadingCircle } from "@/components/ui/loading-circle";

const getTagColor = (tagName: string) => {
  switch (tagName) {
    case "Learning":
      return "bg-blue-100 text-blue-800 hover:bg-blue-200";
    case "Mastered":
      return "bg-green-100 text-green-800 hover:bg-green-200";
    case "Review":
      return "bg-yellow-100 text-yellow-800 hover:bg-yellow-200";
    default:
      return "bg-gray-100 text-gray-800 hover:bg-gray-200";
  }
};

const getPartsOfSpeechColor = (pos: string) => {
  switch (pos) {
    case "Noun":
      return "bg-purple-100 text-purple-800";
    case "Verb":
      return "bg-red-100 text-red-800";
    case "Adjective":
      return "bg-orange-100 text-orange-800";
    case "Adverb":
      return "bg-teal-100 text-teal-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

export default function VocabularyList({
  listVocabularies,
  hasMore,
  fetchVocabularies
}: {
  listVocabularies: VocabularyType[];
  hasMore: boolean;
  fetchVocabularies: () => void;
}) {
  const [vocabularies, setVocabularies] = useState<VocabularyType[]>(listVocabularies);

  const toggleFavorite = (id: string) => {
    setVocabularies((prev) => prev.map((vocab) => (vocab.id === id ? { ...vocab, favorite: !vocab.favorite } : vocab)));
  };

  const handleDelete = (id: string) => {
    setVocabularies((prev) => prev.filter((vocab) => vocab.id !== id));
  };

  return (
    <>
      <InfiniteScroll
        dataLength={vocabularies.length} //This is important field to render the next data
        next={fetchVocabularies}
        hasMore={hasMore}
        loader={
          <div className="flex justify-center items-center py-4">
            <LoadingCircle />
          </div>
        }
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {vocabularies.map((vocab, index) => (
            <Card
              key={index}
              className="!py-1 !px-2 group border hover:shadow-lg transition-all duration-200 shadow-sm"
            >
              <CardHeader className="!p-1">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-xl font-semibold text-slate-800">{vocab.word}</h3>
                      {vocab.audio && (
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-6 w-6 p-0"
                        >
                          <Volume2 className="h-3 w-3" />
                        </Button>
                      )}
                    </div>
                    <p className="text-sm text-slate-500 font-mono">{vocab.pronunciation}</p>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => toggleFavorite(vocab.id)}
                    className="h-8 w-8 p-0"
                  >
                    <Heart
                      className={cn(
                        "h-4 w-4 transition-colors",
                        vocab.favorite ? "fill-red-500 text-red-500" : "text-slate-400 hover:text-red-500"
                      )}
                    />
                  </Button>
                </div>
              </CardHeader>

              <CardContent className="space-y-4 !p-1">
                <p className="text-slate-700 leading-relaxed">{vocab.meaning}</p>

                {/* Parts of Speech */}
                <div className="flex flex-wrap gap-1">
                  {vocab.partsOfSpeech.map((pos) => (
                    <Badge
                      key={pos.id}
                      variant="secondary"
                      className={cn("text-xs", getPartsOfSpeechColor(pos.name))}
                    >
                      {pos.name}
                    </Badge>
                  ))}
                </div>

                {/* Tags */}
                {vocab.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1">
                    {vocab.tags.map((tag) => (
                      <Badge
                        key={tag.id}
                        variant="outline"
                        className={cn("text-xs", getTagColor(tag.name))}
                      >
                        {tag.name}
                      </Badge>
                    ))}
                  </div>
                )}

                {/* Updated Date */}
                <p className="text-xs text-slate-500">Updated {formatDate(vocab.updatedAt, "dd/MM/yyyy")}</p>

                {/* Action Buttons */}
                <div className="flex items-center justify-between pt-2 border-t">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="gap-2 text-slate-600"
                  >
                    Tag
                  </Button>

                  <div className="flex gap-1">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 w-8 p-0 text-slate-600 hover:text-blue-600"
                    >
                      <Edit className="h-3 w-3" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleDelete(vocab.id)}
                      className="h-8 w-8 p-0 text-slate-600 hover:text-red-600"
                    >
                      <Trash2 className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </InfiniteScroll>
    </>
  );
}
