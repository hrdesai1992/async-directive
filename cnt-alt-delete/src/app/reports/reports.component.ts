import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TableHeaderColumnComponent } from '@epsilon/core-ui';
import { Papa } from 'ngx-papaparse';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss'],
})
export class ReportsComponent implements OnInit {
  public loadingTable: boolean = false;
  public scrollItems!: any[];
  public loadingItems: boolean = false;

  public defaultSortOption = 'ORGANIZATION_NAME';
  public defaultSortDirection = 'ASC';
  public scrollSortOption = '';
  public scrollSortDirection = '';

  public onScrollLimitReached(): void {
    this.loadingItems = true;

    // Simulate loading more data from CSV after a delay
    setTimeout(() => {
      this.http
        .get('assets/campaign_met_with_org_name_acp.csv', { responseType: 'text' })
        .subscribe({
          next: (data) => {
            // Parse the CSV data and extract relevant fields
            const newData = this.parseCSVData(data);

            // Append new data to the existing scrollItems array
            this.scrollItems = [...this.scrollItems, ...newData];

            this.loadingItems = false;
          },
          error: (error) => {
            console.error('Error loading CSV data: ', error);
            this.loadingItems = false;
          },
        });
    }, 1000);
  }

  constructor(private http: HttpClient, private papa: Papa) {}

  public ngOnInit(): void {
    this.loadingTable = true;
    setTimeout(() => {
      this.loadingTable = false;
    }, 1000);
    this.loadDataFromCSV();
  }

  public loadDataFromCSV(): void {
    this.http
      .get('assets/campaign_met_with_org_name_acp.csv', {
        responseType: 'text',
      })
      .subscribe({
        next: (data) => {
          this.scrollItems = this.parseCSVData(data);
          this.loadingTable = false;
        },
        error: (error) => {
          console.error('Error loading CSV data: ', error);
          this.loadingTable = false;
        },
      });
  }

  parseCSVData(csvData: string): any[] {
    // Parse CSV data using PapaParse
    const parsedData = this.papa.parse(csvData, { header: true });

    // Transform parsed data into required format
    return parsedData.data.map((item: { ORGANIZATION_NAME: any, NAME: any, FOLDER_NAME:any }) => ({
      organizationName: item.ORGANIZATION_NAME,
      name:item.NAME,
      folderName: item.FOLDER_NAME
    }))
  }

  public scrollSort(
    sortComponent: TableHeaderColumnComponent,
    sortOption: string
  ): void {
    this.scrollSortOption = sortOption;
    this.scrollSortDirection = sortComponent.sortDirection;
  }

  public sortAscDesc(option: string | string[]): string | undefined {
    return this.defaultSortOption === option ||
      option.includes(this.defaultSortOption)
      ? this.defaultSortDirection === 'ASC'
        ? 'ascending'
        : 'descending'
      : undefined;
  }
}
