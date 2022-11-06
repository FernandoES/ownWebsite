import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { AppSideMenuComponent } from './app-side-menu.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { AppSideMenuRoutingModule } from './app-side-menu-routing.module';
import {MatMenuHarness } from '@angular/material/menu/testing';
import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { FakeUserService, routes, TestLanguagePipe } from 'src/test/fake-service-providers';
import { UserService } from '../app-user.service';
import { RouterTestingModule } from '@angular/router/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonHarness} from '@angular/material/button/testing';

describe('AppSideMenuComponent: ', () => {
    let component: AppSideMenuComponent;
    let fixture: ComponentFixture<AppSideMenuComponent>;
    let loader: HarnessLoader;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            imports: [
                CommonModule,
                MatMenuModule,
                MatAutocompleteModule,
                MatIconModule,
                AppSideMenuRoutingModule,
                FormsModule,
                ReactiveFormsModule,
                RouterTestingModule.withRoutes(routes),
                NoopAnimationsModule ],
            declarations: [AppSideMenuComponent, TestLanguagePipe],
            providers: [
                {provide: UserService, useClass: FakeUserService},
            ]
        });
    }));

    beforeEach(async() => {
        fixture = TestBed.createComponent(AppSideMenuComponent);
        component = fixture.componentInstance;
        loader = await TestbedHarnessEnvironment.loader(fixture);
        fixture.detectChanges();
        fixture.nativeElement.querySelector('button').click();
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });

    it('should load three options',async () => {
        fixture.whenStable().then(async ()=> {
            const buttonHarness = await loader.getHarness(MatButtonHarness);
            await buttonHarness.click();
            const matMenuHarness = await loader.getHarness(MatMenuHarness);
            const items = await matMenuHarness.getItems();
            expect(items.length).toBe(3);
        });
    });
});
