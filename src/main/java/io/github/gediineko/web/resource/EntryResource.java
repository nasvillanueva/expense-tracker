package io.github.gediineko.web.resource;

import io.github.gediineko.model.dto.form.EntryFormDto;
import io.github.gediineko.model.dto.list.EntryListDto;
import io.github.gediineko.model.entity.Entry;
import io.github.gediineko.services.EntryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by ggolong on 10/7/16.
 */
@RestController
@RequestMapping("/entry")
public class EntryResource {

    @Autowired
    private EntryService entryService;

    @GetMapping
    public ResponseEntity<List<EntryListDto>> getAll() {
        return ResponseEntity.ok(entryService.getAllEntries());
    }

    @GetMapping("/summary/{category}")
    public ResponseEntity<List<EntryListDto>> getEntryList(@PathVariable String category) {
        return ResponseEntity.ok(entryService.getEntryList(category));
    }

    @GetMapping("/{category}/total")
    public ResponseEntity<Double> getTotal(@PathVariable String category) {
        return ResponseEntity.ok(entryService.getTotal(category));
    }

    @GetMapping("/balance")
    public ResponseEntity<Double> getBalance() {
        return ResponseEntity.ok(entryService.getBalance());
    }

    @PostMapping
    public ResponseEntity<EntryFormDto> create(@RequestBody EntryFormDto entryFormDto){
        Entry entry = entryFormDto.getTarget();
        return ResponseEntity.ok(new EntryFormDto(entryService.createEntry(entry)));
    }

    @PutMapping
    public ResponseEntity<EntryFormDto> update(@RequestBody EntryFormDto entryFormDto){
        Entry entry = entryFormDto.getTarget();
        return ResponseEntity.ok(new EntryFormDto(entryService.createEntry(entry)));
    }

    @GetMapping("/{id}")
    public ResponseEntity<EntryFormDto> update(@PathVariable Long id){
        return ResponseEntity.ok(new EntryFormDto(entryService.getEntity(id)));
    }


}
