package io.github.gediineko.web.resource;

import io.github.gediineko.model.dto.list.EntryListDto;
import io.github.gediineko.services.EntryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
    public ResponseEntity<List<EntryListDto>> getAll(){
        return ResponseEntity.ok(entryService.getAllEntry());
    }


}
