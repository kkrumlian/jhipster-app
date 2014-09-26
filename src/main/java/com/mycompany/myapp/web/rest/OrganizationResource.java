package com.mycompany.myapp.web.rest;

import com.codahale.metrics.annotation.Timed;
import com.mycompany.myapp.domain.Organization;
import com.mycompany.myapp.repository.OrganizationRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.inject.Inject;
import javax.servlet.http.HttpServletResponse;
import java.util.List;

/**
 * REST controller for managing Organization.
 */
@RestController
@RequestMapping("/app")
public class OrganizationResource {

    private final Logger log = LoggerFactory.getLogger(OrganizationResource.class);

    @Inject
    private OrganizationRepository organizationRepository;

    /**
     * POST  /rest/organizations -> Create a new organization.
     */
    @RequestMapping(value = "/rest/organizations",
            method = RequestMethod.POST,
            produces = "application/json")
    @Timed
    public void create(@RequestBody Organization organization) {
        log.debug("REST request to save Organization : {}", organization);
        organizationRepository.save(organization);
    }

    /**
     * GET  /rest/organizations -> get all the organizations.
     */
    @RequestMapping(value = "/rest/organizations",
            method = RequestMethod.GET,
            produces = "application/json")
    @Timed
    public List<Organization> getAll() {
        log.debug("REST request to get all Organizations");
        return organizationRepository.findAll();
    }

    /**
     * GET  /rest/organizations/:id -> get the "id" organization.
     */
    @RequestMapping(value = "/rest/organizations/{id}",
            method = RequestMethod.GET,
            produces = "application/json")
    @Timed
    public ResponseEntity<Organization> get(@PathVariable Long id, HttpServletResponse response) {
        log.debug("REST request to get Organization : {}", id);
        Organization organization = organizationRepository.findOne(id);
        if (organization == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(organization, HttpStatus.OK);
    }

    /**
     * DELETE  /rest/organizations/:id -> delete the "id" organization.
     */
    @RequestMapping(value = "/rest/organizations/{id}",
            method = RequestMethod.DELETE,
            produces = "application/json")
    @Timed
    public void delete(@PathVariable Long id) {
        log.debug("REST request to delete Organization : {}", id);
        organizationRepository.delete(id);
    }
}
