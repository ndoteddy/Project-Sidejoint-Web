export interface Message {
  priceSummary: PriceResult;
}


export interface PriceResult {
  result:PriceSummary[];
}

export interface PriceSummary {  
  itemid: string;
  name: number;
  email: number;
  todayopenvalue: string;
  priceSummaryItem:PriceSummaryItem[];
}

export interface PriceSummaryItem {  
  itemid: string;
  averageprice: number;
  totalprice: number;
  percentage: string;
  pricestatus:string;
}

