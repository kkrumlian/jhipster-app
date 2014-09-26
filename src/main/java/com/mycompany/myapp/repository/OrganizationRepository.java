package com.mycompany.myapp.repository;

import com.mycompany.myapp.domain.Organization;
        import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Spring Data JPA repository for the Organization entity.
 */
public interface OrganizationRepository extends JpaRepository<Organization, Long> {

}
