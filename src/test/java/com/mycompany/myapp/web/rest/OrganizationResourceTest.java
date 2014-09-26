package com.mycompany.myapp.web.rest;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import javax.inject.Inject;

import org.joda.time.LocalDate;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.MockitoAnnotations;
import org.springframework.boot.test.SpringApplicationConfiguration;
import org.springframework.http.MediaType;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.TestExecutionListeners;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.support.DependencyInjectionTestExecutionListener;
import org.springframework.test.context.support.DirtiesContextTestExecutionListener;
import org.springframework.test.context.transaction.TransactionalTestExecutionListener;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.util.ReflectionTestUtils;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import com.mycompany.myapp.Application;
import com.mycompany.myapp.domain.Organization;
import com.mycompany.myapp.repository.OrganizationRepository;


/**
 * Test class for the OrganizationResource REST controller.
 *
 * @see OrganizationResource
 */
@RunWith(SpringJUnit4ClassRunner.class)
@SpringApplicationConfiguration(classes = Application.class)
@WebAppConfiguration
@TestExecutionListeners({ DependencyInjectionTestExecutionListener.class,
    DirtiesContextTestExecutionListener.class,
    TransactionalTestExecutionListener.class })
@ActiveProfiles("dev")
public class OrganizationResourceTest {
  
  private static final Long DEFAULT_ID = new Long(1L);

  private static final String DEFAULT_NAME = "name";

  private static final String UPD_NAME = "nameUpt";

  @Inject
  private OrganizationRepository organizationRepository;

  private MockMvc restOrganizationMockMvc;
  
  private Organization organization;

  @Before
  public void setup() {
      MockitoAnnotations.initMocks(this);
      OrganizationResource organizationResource = new OrganizationResource();
      ReflectionTestUtils.setField(organizationResource, "organizationRepository", organizationRepository);

      this.restOrganizationMockMvc = MockMvcBuilders.standaloneSetup(organizationResource).build();

      organization = new Organization();
      organization.setId(DEFAULT_ID);
  	organization.setName(DEFAULT_NAME);
  }

  @Test
  public void testCRUDOrganization() throws Exception {

  	// // Create Organization
  	// restOrganizationMockMvc.perform(post("/app/rest/organizations")
  	// 		.contentType(TestUtil.APPLICATION_JSON_UTF8)
   //            .content(TestUtil.convertObjectToJsonBytes(organization)))
   //            .andExpect(status().isOk());

  	// // Read Organization
  	// restOrganizationMockMvc.perform(get("/app/rest/organizations/{id}", DEFAULT_ID))
   //            .andExpect(status().isOk())
   //            .andExpect(content().contentType(MediaType.APPLICATION_JSON))
   //            .andExpect(jsonPath("$.id").value(DEFAULT_ID.intValue()))
  	// 		.andExpect(jsonPath("$.name").value(DEFAULT_NAME));

  	// // Update Organization
  	// organization.setName(UPD_NAME);

  	// restOrganizationMockMvc.perform(post("/app/rest/organizations")
  	// 		.contentType(TestUtil.APPLICATION_JSON_UTF8)
   //            .content(TestUtil.convertObjectToJsonBytes(organization)))
   //            .andExpect(status().isOk());

  	// // Read updated Organization
  	// restOrganizationMockMvc.perform(get("/app/rest/organizations/{id}", DEFAULT_ID))
   //            .andExpect(status().isOk())
   //            .andExpect(content().contentType(MediaType.APPLICATION_JSON))
   //            .andExpect(jsonPath("$.id").value(DEFAULT_ID.intValue()))
  	// 		.andExpect(jsonPath("$.name").value(UPD_NAME));

  	// // Delete Organization
  	// restOrganizationMockMvc.perform(delete("/app/rest/organizations/{id}", DEFAULT_ID)
   //            .accept(TestUtil.APPLICATION_JSON_UTF8))
   //            .andExpect(status().isOk());

  	// // Read nonexisting Organization
  	// restOrganizationMockMvc.perform(get("/app/rest/organizations/{id}", DEFAULT_ID)
   //            .accept(TestUtil.APPLICATION_JSON_UTF8))
   //            .andExpect(status().isNotFound());
  }
}
