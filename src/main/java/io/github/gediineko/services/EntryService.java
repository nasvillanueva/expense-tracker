package io.github.gediineko.services;

import io.github.gediineko.model.dto.list.EntryListDto;
import io.github.gediineko.model.entity.Entry;

import java.util.List;

/**
 * Created by ggolong on 10/7/16.
 */
public interface EntryService {

    List<EntryListDto> getAllEntries();

    List<EntryListDto> getEntryList(String category);

    Entry createEntry(Entry newEntry); // EntityAlreadyExistException

    Entry updateEntry(Entry updatedEntry); // EntityDoesNotExistException

    Entry getEntity(Long id); // EntityDoesNotExistException

    Double getTotal(String category);

    Double getBalance();

    Boolean isNegativeBal();

    void deleteEntry(Long id);
}
