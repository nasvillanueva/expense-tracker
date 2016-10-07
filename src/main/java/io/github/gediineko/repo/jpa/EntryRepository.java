package io.github.gediineko.repo.jpa;

import io.github.gediineko.model.dto.list.EntryListDto;
import io.github.gediineko.model.entity.Entry;
import io.github.gediineko.model.ref.Category;
import io.github.gediineko.repo.base.BaseJpaRepo;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by ggolong on 10/7/16.
 */
@Repository
public interface EntryRepository extends BaseJpaRepo<Entry, Long> {

    @Query("select sum(e.value) from Entry e where e.category in :sameCategoryList")
    Double getTotalOfCategory(@Param("sameCategoryList") List<EntryListDto> sameCategoryList);


    List<Entry> findAllByCategory(Category category);
}
