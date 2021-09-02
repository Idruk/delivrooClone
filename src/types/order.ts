type Sort = "Distance" | "Note" | "Recommandations" | 'Name'

type Regime = {id: number, type: string, checked: boolean}

interface Order {
    sort: Sort,
    regimes: [
        Regime
    ]
}

export default Order