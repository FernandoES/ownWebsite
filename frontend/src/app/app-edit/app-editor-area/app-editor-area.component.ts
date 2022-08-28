import { Component } from '@angular/core';
import { AppSuggestionsListService } from '../app-suggestions-list/app-suggestions-list.service';

enum EditOption {
    CREATE,
    SUGGESTIONS
}

@Component({
    selector: 'app-editor-area',
    templateUrl: 'app-editor-area.component.html'
})

export class AppEditorAreaComponent{
    EditOption = EditOption;
    selectedEditOption = EditOption.CREATE;
    constructor(public suggestionService: AppSuggestionsListService) {}
    
    goToCreateBlog() {
        this.selectedEditOption = EditOption.CREATE;
    }

    goToSuggestions() {
        this.selectedEditOption = EditOption.SUGGESTIONS;
    }
}