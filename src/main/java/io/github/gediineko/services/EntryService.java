package io.github.gediineko.services;

import io.github.gediineko.model.dto.list.EntryListDto;

import java.util.List;

/**
 * Created by ggolong on 10/7/16.
 */
public interface EntryService {

    List<EntryListDto> getAllEntry();
}
