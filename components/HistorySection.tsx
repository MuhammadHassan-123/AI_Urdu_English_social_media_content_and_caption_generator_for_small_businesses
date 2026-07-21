"use client";

import {
  HistoryItem,
  removeHistory,
  clearHistory,
} from "@/lib/history";

import {
  HiOutlineClock,
  HiOutlineTrash,
} from "react-icons/hi2";

type Props = {
  history: HistoryItem[];
  onView: (item: HistoryItem) => void;
  onRefresh: () => void;
};

export default function HistorySection({
  history,
  onView,
  onRefresh,
}: Props) {
  if (history.length === 0) return null;

  async function deleteItem(id: string) {
   await removeHistory(id);
   await onRefresh();
  }

  async function deleteAll() {
    const ok = confirm("Are you sure you want to clear all history?");

    if (!ok) return;

    await clearHistory();
    await onRefresh();
  }

  return (
    <section className="mx-auto mt-12 max-w-5xl px-5">

      {/* Header */}
      <div className="mb-6 flex items-center justify-between">

        <h2 className="flex items-center gap-2 font-heading text-xl font-bold text-ink">
          <HiOutlineClock className="text-brand-600" />
          Recent History
        </h2>

        <button
          onClick={deleteAll}
          className="inline-flex items-center gap-2 rounded-full border border-border-soft bg-white px-4 py-2 text-sm font-semibold text-ink-soft transition-colors hover:border-rose-300 hover:text-rose-600"
        >
          <HiOutlineTrash size={15} />
          Clear All
        </button>

      </div>

      {/* History Cards */}
      <div className="space-y-3">

        {history.map((item) => (
          <div
            key={item.id}
            className="rounded-card border border-border-soft/80 bg-white p-5 shadow-sm shadow-ink/5"
          >
            <div className="flex items-center justify-between gap-4">

              <div>

                <h3 className="font-semibold text-ink">
                  {item.businessType}
                </h3>

                <p className="mt-0.5 text-sm text-ink-soft">
                  {item.product}
                </p>

                <p className="mt-0.5 text-xs text-muted">
                 {item.createdAt?.toDate().toLocaleString()}
                </p>

              </div>

              <div className="flex shrink-0 gap-2">

                <button
                  onClick={() => onView(item)}
                  className="rounded-full bg-brand-600 px-4 py-2 text-sm font-semibold text-cream transition-colors hover:bg-brand-700"
                >
                  View
                </button>

                <button
                  onClick={() => deleteItem(item.id)}
                  aria-label="Delete"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border-soft text-ink-soft transition-colors hover:border-rose-300 hover:text-rose-600"
                >
                  <HiOutlineTrash size={16} />
                </button>

              </div>

            </div>
          </div>
        ))}

      </div>

    </section>
  );
}