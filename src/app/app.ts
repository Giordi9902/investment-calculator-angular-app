  import { Component, Output, signal } from '@angular/core';
import { Header } from './header/header';
import { UserInput } from './user-input/user-input';
import { InvestmentsResults } from './investments-results/investments-results';
import type { InvestmentInput, InvestmentResults } from './investment-input';
import { InvestmentService } from './investment.service';

@Component({
  selector: 'app-root',
  imports: [Header, UserInput, InvestmentsResults],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'investment-calculator';
}
