import { Component, computed, inject, input } from '@angular/core';
import { InvestmentResults } from '../investment-input';
import { CurrencyPipe } from '@angular/common';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-investments-results',
  imports: [CurrencyPipe],
  templateUrl: './investments-results.html',
  styleUrl: './investments-results.css',
})
export class InvestmentsResults {
  private investmentService = inject(InvestmentService);

  results = this.investmentService.resultsData.asReadonly();
}
