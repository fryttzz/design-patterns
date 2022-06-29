namespace strategyPattern {
    interface SortStrategy {
        sort(dataset: number[]): number[]
    }

    class BubbleSortStrategy implements SortStrategy {
        public sort(dataset: number[]) {
            console.log('Sorting using bubble sort')

            return dataset
        }
    }

    class QuickSortStrategy implements SortStrategy {
        public sort(dataset: number[]): number[] {
            console.log('Sorting using quick sort')

            return dataset
        }
    }

    class Sorter {
        protected sorter

        public constructor(sorter: SortStrategy) {
            this.sorter = sorter
        }

        public sort(dataset: number[]): number[] {
            return this.sorter.sort(dataset)
        }
    }

    let dataset = [1, 2, 3, 4, 5, 6, 8]

    let sorter = new Sorter(new BubbleSortStrategy())
    sorter.sort(dataset)

    sorter = new Sorter(new QuickSortStrategy())
    sorter.sort(dataset)
}