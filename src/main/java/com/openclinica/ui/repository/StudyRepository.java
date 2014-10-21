package com.openclinica.ui.repository;

import com.openclinica.ui.domain.Study;
        import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Spring Data JPA repository for the Study entity.
 */
public interface StudyRepository extends JpaRepository<Study, Long> {

}
